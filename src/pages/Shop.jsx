// import Layout from "../components/Layout";
// import CoffeeCard from "../components/CoffeeCard";
// import products from "../products";

// export default function Shop() {
//   return (
//     <Layout>
//       <section className="w-full h-full">
//         <div>Shop header</div>
//         <div className="w-full">
//           {products.map((coffee) => (
//             <div key={coffee.id} className="">
//               <CoffeeCard coffee={coffee} />
//             </div>
//           ))}
//         </div>
//         <div>Shop other</div>
//       </section>
//     </Layout>
//   );
// }

import Layout from "../components/Layout";
import CoffeeCard from "../components/CoffeeCard";
import products from "../products";

export default function Shop() {
  return (
    <Layout>
      <section className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="text-4xl font-extrabold text-fern-green mb-6 border-b border-cocoa-brown pb-2">
          Shop Our Coffee
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {products.map((coffee) => (
            <div
              key={coffee.id}
              className="rounded-2xl shadow-lg overflow-hidden"
            >
              <CoffeeCard coffee={coffee} />
            </div>
          ))}
        </div>

        <div className="text-center text-white text-sm opacity-70">
          Browse our full collection of small-batch, ethically sourced beans.
        </div>
      </section>
    </Layout>
  );
}
