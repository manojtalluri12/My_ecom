import React from "react";
import OrderList from "./OrderList";
import "./order.css";
import OrderPad from "./Orderpadlist";

const Orders = ({ order }) => {
  return (
    <div className="OrderList">
      {order.length === 0 && <h1 className="ordertitle">No items in order</h1>}
        <div className="ordergridleft">
          {order.map((each) => {
            return (
              <OrderList
                id={each.id}
                title={each.title}
                price={each.price}
                thumbnail={each.thumbnail}
              ></OrderList>
            );
          })}
        </div>
      <div className="ordergridright">
      {
        order.length >=1 && <OrderPad cart={order}/>
      }
        </div>
    </div>
  );
};

export default Orders;
