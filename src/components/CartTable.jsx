// src/components/CartTable.jsx
const CartTable = ({ cart, total, removeFromCart }) => {
  if (!cart || cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3 border-b">Image</th>
            <th className="p-3 border-b">Name</th>
            <th className="p-3 border-b">Price</th>
            <th className="p-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3 border-b">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="p-3 border-b">{item.name}</td>
              <td className="p-3 border-b">${item.price.toFixed(2)}</td>
              <td className="p-3 border-b">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="p-3 font-semibold text-right">
              Total: ${total.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartTable;
