import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../redux/categories/categorySlice';
import css from "./CategoryDropdown.module.css";
import { fetchCategories } from '../../redux/categories/operations';

const CategoryDropdown = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);
  const status = useSelector((state) => state.categories.status);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  const handleSelect = (categoryId) => {
    dispatch(selectCategory(categoryId));
    setIsOpen(false);
  };

  return (
    <div className={css["custom-select-container"]}>
      <div className={css["custom-select"]} onClick={() => setIsOpen(!isOpen)}>
        <span className={css[selectedCategory ? 'selected-text' : 'placeholder-text']}>{selectedCategory ? categories.find(cat => cat.id === selectedCategory)?.name : 'Select a category'}
          <svg className={css["arrow-icon"]} >
            {isOpen ? (<use href='/img/icons.svg#icon-chevron-up-black'></use>) : (
              <use href='/img/icons.svg#icon-chevron-down-black'></use>)}
          </svg>
        </span>
      </div>
      {isOpen && (
        <ul className={css["custom-options"]}>
          {status !== 'loading' && status !== 'failed' &&
            categories.map((category) => (
              <li key={category.id} onClick={() => handleSelect(category.id)}>
                {category.name}
              </li>
            )
          )}
          {status === 'loading' &&
            <li className={css["loading-error-text"]}>Loading categories...</li>
          }
          {status === 'failed' &&
            <li className={css["loading-error-text"]}>Oops, something went wrong, please reload the page...</li>
          }
        </ul>
      )}
    </div>
  );
};

export default CategoryDropdown;
