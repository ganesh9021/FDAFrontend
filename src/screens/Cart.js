import React from "react";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import trash from "../images/trash-2935441_1281.png";

export default function Cart() {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-light text-center fs-3">
          The cart is Empty!
        </div>
      </div>
    );
  }

  const handleCheckout = async () => {
    alert("Order placed successfully!");
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch(`${backendUrl}/api/orderData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });
    console.log("order res:", response);
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <div>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover">
          <thead className="text-success fs-4">
            <tr className="text-light">
              <th className="text-light" scope="col">
                #
              </th>
              <th className="text-light" scope="col">
                Name
              </th>
              <th className="text-light" scope="col">
                Quantity
              </th>
              <th className="text-light" scope="col">
                Option
              </th>
              <th className="text-light" scope="col">
                Amount
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th className="text-light">{index + 1}</th>
                <td className="text-light">{food.name}</td>
                <td className="text-light">{food.qty}</td>
                <td className="text-light">{food.size}</td>
                <td className="text-light">{food.price}</td>
                <td>
                  <button type="button" className="btn btn-light p-0">
                    <img
                      style={{ width: "40px" }}
                      src={trash}
                      alt="delete"
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index });
                      }}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="text-light">Total Price: {totalPrice}/-</h1>
        </div>
        <div className="text-center">
          <button className="btn bg-success mt-5" onClick={handleCheckout}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
