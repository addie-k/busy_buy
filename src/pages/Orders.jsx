import React from "react";
import { useOutletContext } from "react-router-dom";

const Orders = () => {
    const { orders } = useOutletContext();

    // Add a unique ID for each order
    const updatedOrders = orders.map((order, id) => ({ order, id: id + 1 }));

    return (
        <div className="max-w-4xl mx-auto mt-[5rem] p-4 sm:p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
                Orders
            </h1>
            {orders.length > 0 ? (
                <div className="space-y-4">
                    {updatedOrders.map((order) => (
                        <div
                            key={order.id}
                            className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-100 p-4 rounded-md shadow"
                        >
                            <div className="w-full sm:w-auto">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    Order ID: {order.id}
                                </h2>
                                <p className="text-gray-600">
                                    Total: ₹{order.order.total.toFixed(2)}
                                </p>
                                <p className="text-gray-600">
                                    Date:{" "}
                                    {new Date(order.order.date).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-2"></div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600 text-center">No orders found.</p>
            )}
        </div>
    );
};

export default Orders;
