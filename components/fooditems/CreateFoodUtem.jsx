import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CreateFoodItem() {
  const [foodItem, setFoodItem] = useState({
    date: '',
    title: '',
    description: '',
    quantity: '',
    itemDimensions: '',
    weight: '',
    storageMedium: '',
    ingredients: '',
    hasEgg: false,
    isNonVeg: false,
    reported: false,
    user: { uid: 1 }, // replace with appropriate user ID
    claimedByUser: null,
    reporterUser: null,
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFoodItem({
      ...foodItem,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/foodItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(foodItem),
      });
      if (response.ok) {
        router.push('/'); // Redirect to home or list page
      }
    } catch (error) {
      console.error('Error creating food item:', error);
    }
  };

  return (
    <div>
      <h1>Create Food Item</h1>
      <form onSubmit={handleSubmit}>
        <input type="datetime-local" name="date" value={foodItem.date} onChange={handleChange} />
        <input type="text" name="title" value={foodItem.title} onChange={handleChange} />
        <textarea name="description" value={foodItem.description} onChange={handleChange} />
        <input type="text" name="quantity" value={foodItem.quantity} onChange={handleChange} />
        <input type="text" name="itemDimensions" value={foodItem.itemDimensions} onChange={handleChange} />
        <input type="text" name="weight" value={foodItem.weight} onChange={handleChange} />
        <input type="text" name="storageMedium" value={foodItem.storageMedium} onChange={handleChange} />
        <input type="text" name="ingredients" value={foodItem.ingredients} onChange={handleChange} />
        <label>
          Has Egg:
          <input type="checkbox" name="hasEgg" checked={foodItem.hasEgg} onChange={handleChange} />
        </label>
        <label>
          Is Non-Veg:
          <input type="checkbox" name="isNonVeg" checked={foodItem.isNonVeg} onChange={handleChange} />
        </label>
        <button type="submit">Create Food Item</button>
      </form>
    </div>
  );
}
