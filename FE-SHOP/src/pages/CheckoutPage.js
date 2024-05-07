/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { PageHero, CartContentCheckOut } from "../components";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import payment from "../assets/payment2.jpg";
// extra imports
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { Link, redirect } from "react-router-dom";
import CartTotals2 from "../components/CartTotal2";
import { BsSortDownAlt } from "react-icons/bs";
const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, updateshippingfee, total_amount, shipping_fee, clearCart } =
    useCartContext();
  const { users } = useUserContext();
  const { userId, email, name } = users;
  console.log(userId);
  const [values, setValues] = useState({
    name,
    phonenumber: 0,
    email,
    provinces: "",
    districtid: "",
    wardid: "",
    housenumber: "",
    paymentmethod: false,
    codmethod: false,
    paymentIntentId: Date.now().toString(36),
  });
  const [provincess, setProvinces] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  console.log(ward);
  const CompleteHandler = async () => {
    const {
      phonenumber,
      name,
      email,
      provinces,
      districtid,
      wardid,
      housenumber,
      paymentmethod,
      paymentIntentId,
    } = values;
    const cartitems = cart.map((cartitem) => {
      return {
        name: cartitem.name,
        color: cartitem.color,
        amount: cartitem.amount,
        _id: cartitem.idproduct,
        price: cartitem.price,
      };
    });
    const districtname = district.find(
      (e) => e.DistrictID === Number(districtid)
    );
    const wardname = ward.find((e) => e.WardCode === wardid);
    const provincesname = provincess.find(
      (e) => e.ProvinceID === Number(provinces)
    );
    const location = {
      province: provincesname.ProvinceName,
      district: districtname.DistrictName,
      ward: wardname.WardName,
      housenumber: housenumber,
    };
    const body = {
      items: cartitems,
      tax: ((total_amount + shipping_fee) / 100) * 8,
      shippingFee: shipping_fee,
      location,
      customername: name,
      customeremail: email,
      phonenumber: phonenumber,
      paymentIntentId,
      paymentmethod,
      userid: userId,
    };
    console.log(body);
    const response = await fetch("http://localhost:4000/api/v1/orders", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      clearCart();
      navigate("/paymentsuccess");
    } else {
      toast.error("Đã xảy ra lỗi vui lòng thử lại", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handleChange = async (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (e.target.name === "provinces") {
      const body = { province_id: Number(e.target.value) };
      console.log(body);
      const response = await fetch(
        "https://online-gateway.ghn.vn/shiip/public-api/master-data/district",
        {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
            token: "202b54d4-afda-11ee-b38e-f6f098158c7e",
          },
          body: JSON.stringify(body),
        }
      );
      const result = await response.json();
      console.log(result);
      setDistrict(result.data);
    }
    if (e.target.name === "codmethod") {
      console.log(e.target.name);
      const checked = e.target.checked;
      setValues({
        ...values,
        [e.target.name]: checked,
        paymentmethod: !checked,
      });
      // if (checked === true) {
      //   setValues({ ...values, paymentmethod: false });
      // }
    }
    if (e.target.name === "paymentmethod") {
      console.log(e.target.name);
      const checked = e.target.checked;
      console.log(e.target.checked);
      setValues({ ...values, [e.target.name]: checked, codmethod: !checked });
    }
    console.log(values);
    if (e.target.name === "districtid") {
      const body = {
        district_id: Number(e.target.value),
      };
      console.log(body);
      const response = await fetch(
        "https://online-gateway.ghn.vn/shiip/public-api/master-data/ward",
        {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
            token: "202b54d4-afda-11ee-b38e-f6f098158c7e",
          },
          body: JSON.stringify(body),
        }
      );
      const result = await response.json();
      setWard(result.data);
    }
    if (e.target.name === "wardid") {
      console.log(cart);

      const items = cart.map((onecart) => {
        return {
          name: onecart.name,
          quantity: onecart.amount,
          height: onecart.height,
          weight: onecart.weight,
          length: onecart.length,
          width: onecart.width,
        };
      });
      const inital = 0;
      const totalweight = cart.reduce(
        (total, onecart) =>
          total + Number(onecart.weight) * Number(onecart.amount),
        inital
      );
      console.log(totalweight);
      const body = {
        service_type_id: 2,
        from_district_id: 1454,
        to_district_id: Number(values.districtid),
        to_ward_code: values.wardid,
        weight: totalweight,
        insurance_value: 0,
        coupon: null,
        items,
      };
      console.log(body);
      const response = await fetch(
        "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee",
        {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
            token: "202b54d4-afda-11ee-b38e-f6f098158c7e",
            shop_id: "4834755",
          },
          body: JSON.stringify(body),
        }
      );
      const result = await response.json();
      toast.success("Phí vận chuyển được cập nhật", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      console.log(result.data.total);
      updateshippingfee(result.data.total);
    }
  };
  useEffect(() => {
    const FetchProvinces = async () => {
      const response = await fetch(
        "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
        {
          method: "GET",
          headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
            token: "202b54d4-afda-11ee-b38e-f6f098158c7e",
          },
        }
      );
      const result = await response.json();
      setProvinces(result.data);
    };
    FetchProvinces();
  }, []);
  console.log(values);
  return (
    <>
      <Wrapper className="page">
        <PageHero title="Check out"></PageHero>
        <h2 className="title">THANH TOÁN </h2>
        <section class="section-centers">
          <div class="guestinfo">
            <h3>Thông tin khách hàng</h3>
            <h5>Thông tin cá nhân</h5>
            <form>
              <div class="form-group">
                <label for="name">Họ và tên:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </form>
            <div class="form-group">
              <label for="name">Số điện thoại:</label>
              <input
                type="text"
                id="name"
                name="phonenumber"
                value={values.phonenumber}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="name">Email:</label>
              <input
                type="text"
                id="name"
                name="email"
                value={values.email}
                onChange={handleChange}
                required
              />
            </div>
            <h5>Địa chỉ</h5>
            <div class="form-group">
              <label for="propvinces">Tỉnh / Thành phố :</label>
              <select
                name="provinces"
                id="provinces"
                onChange={handleChange}
                required
              >
                <option value="">Tỉnh / Thành phố</option>
                {provincess.map((province) => {
                  return (
                    <option value={province.ProvinceID}>
                      {province.ProvinceName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div class="form-group">
              <label for="name">Quận/ Huyện :</label>
              <select
                name="districtid"
                id="districtid"
                onChange={handleChange}
                required
              >
                <option value="">Quận/huyện</option>
                {district.map((district) => {
                  return (
                    <option value={district.DistrictID}>
                      {district.DistrictName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div class="form-group">
              <label for="name">Phường/ Xã :</label>
              <select
                name="wardid"
                id="wardid"
                onChange={handleChange}
                required
              >
                <option value="">Phường/Xã</option>
                {ward.map((ward) => {
                  return <option value={ward.WardCode}>{ward.WardName}</option>;
                })}
              </select>
            </div>
            <div class="form-group">
              <label for="housenumber">Số nhà:</label>
              <input
                type="text"
                id="housenumber"
                name="housenumber"
                value={values.housenumber}
                onChange={handleChange}
                required
              />
            </div>
            <h5>Hình thức Thanh toán</h5>

            <label class="checkbox-container">
              Thanh toán chuyển khoản
              <input
                type="checkbox"
                id="paymentmethod"
                name="paymentmethod"
                onClick={handleChange}
                checked={values.paymentmethod}
              />
              <span class="checkmark"></span>
            </label>
            {values.paymentmethod ? (
              <div class="paymentmethod">
                <div className="paymentcontainer">
                  <div className="content">
                    <h5>
                      Số tiền phải thanh toán: {total_amount + shipping_fee} VND
                    </h5>
                    <p>Nội dung chuyển khoản: {values.paymentIntentId}</p>
                  </div>
                  <img src={payment} alt=""></img>
                </div>
              </div>
            ) : null}
            <label class="checkbox-container">
              Thanh toán khi nhận hàng COD/SHIP
              <input
                type="checkbox"
                id="codmethod"
                name="codmethod"
                checked={values.codmethod}
                onClick={handleChange}
              />
              <span class="checkmark"></span>
            </label>
            <div className="button-container">
              <button onClick={CompleteHandler} className="btn hero-btn">
                Hoàn thành
              </button>
            </div>
          </div>
          <div class="guestcart">
            <div className="containerguestcart">
              <h3>Giỏ hàng</h3>
              <CartContentCheckOut></CartContentCheckOut>
            </div>
            <div className="total">
              <CartTotals2></CartTotals2>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  .title {
    margin: 1rem;
  }
  .total {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: 3rem;
    transform: translateX(10px);
  }
  .paymentcontainer {
    border: 1px black solid;
    padding: 1rem;
  }
  .paymentcontainer h5,
  p {
    margin-bottom: 1rem;
  }
  .paymentcontainer img {
    display: block;
    width: 300px;
    margin: auto;
  }
  .hero-btn {
    padding: 0.75rem 1.5rem;
    width: 13rem;
    text-align: center;
    font-size: 1.3rem;
    font-weight: bold;
    margin: 3rem auto;
  }
  .section-centers {
    width: 90vw;
    margin: 2rem auto;
    max-width: var(--max-width);
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: auto auto;
    padding: 2rem;
    gap: 2rem;
  }
  .button-container {
    display: flex;
  }
  .checkbox-container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  h5 {
    margin-top: 1rem;
  }
  .containerguestcart {
    border: 1px black solid;
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
  }
  .containerguestcart h3 {
    text-align: center;
  }
  .checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .checkbox-container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .checkbox-container input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .checkbox-container input:checked ~ .checkmark:after {
    display: block;
  }
  .form-group {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-top: 20px;
    font-size: 1rem;
  }
  .form-group label {
    width: 150px;
  }
  .form-group select {
    width: 300px;
  }
  .form-group input {
    font-size: 1rem;
    width: 300px;
  }
  input,
  select {
    border: 1px black solid;
  }
  /* Style the checkmark/indicator */
  .checkbox-container .checkmark:after {
    left: 7px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
export default CheckoutPage;
