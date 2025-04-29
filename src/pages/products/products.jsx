import React, { useContext } from 'react';
import { ProductsPage } from "./productsStyle.js";
import { ProductCard } from "../../components/productCard/productCard.jsx";
import { FilterContainer } from "../../components/filterContainer/FilterContainer.jsx";
import { getHotCoffees, getIcedCoffees } from '../../services/coffeeService';
import { CartContext } from '../../contexts/CartContext';
import Header from '../../components/header/header.jsx';

const Products = () => {
  const [filter, setFilter] = React.useState("");
  const [coffees, setCoffees] = React.useState([]);
  const {setCart } = useContext(CartContext);

  React.useEffect(() => {
    async function fetchCoffees() {
      const hotCoffees = await getHotCoffees();
      const icedCoffees = await getIcedCoffees();
      setCoffees([...hotCoffees, ...icedCoffees]);
    }
    fetchCoffees();
  }, []);

  const filteredCoffees = coffees.filter(coffee =>
    coffee.title && coffee.title.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddToCart = (coffee) => {
    setCart(prev => {
      // Verifica se o item já está no carrinho
      const found = prev.find(item => item.id === coffee.id);
      if (found) {
        // Se já existe, incrementa a quantidade
        return prev.map(item =>
          item.id === coffee.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      } else {
        // Se não existe, adiciona com quantidade 1
        return [...prev, { ...coffee, quantity: 1 }];
      }
    });
  };

  return (
    <div>
      <Header/>
      <ProductsPage>
        <div className="productsArea">
          {filteredCoffees.map((coffee) => (
            <ProductCard key={`${coffee.id}-${coffee.title}`} coffee={coffee} onAddToCart={handleAddToCart} />
          ))}
        </div>
        <div className="seachArea">
          <FilterContainer filter={filter} setFilter={setFilter}/>
        </div>
      </ProductsPage>
    </div>
  );
};

export default Products;

