import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Modal from "./components/Modal";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

function App() {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleAddItems(item) {
    setItems((a) => [...a, item]); //items is arrow finction parameter so i can take any name there so i replaced items with a
  }

  function handleDeleteItems(id) {
    setItems((a) => a.filter((item) => item.id !== id));
  }

  function onToggleItem(id) {
    setItems((a) =>
      a.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    // const confirmed = window.confirm(
    //   "Are you sure you want to delete all items?"
    // );
    // if (confirmed) setItems([]);
    if (items.length === 0) return;
    setIsModalOpen(true);
  }

  function confirmClearList() {
    setItems([]);
    setIsModalOpen(false);
  }

  function cancelClearList() {
    setIsModalOpen(false);
  }
  //passing state items as a props

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={onToggleItem}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
      {isModalOpen && (
        <Modal
          message="Are you sure you want to delete all items?"
          onConfirm={confirmClearList}
          onCancel={cancelClearList}
        />
      )}
    </div>
  );
}
export default App;
