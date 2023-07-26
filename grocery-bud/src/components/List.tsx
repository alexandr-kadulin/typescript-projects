import { FaEdit, FaTrash } from 'react-icons/fa';
import { IList } from '.';

interface IListProps {
  items: IList[];
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
}

export const List = ({ items, removeItem, editItem }: IListProps) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;

        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};
