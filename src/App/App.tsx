import * as React from 'react';

import api from '../item/api';
import { Item } from '../item/types';
import Button from '../ui/controls/Button';
import Modal from '../ui/controls/Modal';
import ModalFooter from '../ui/controls/Modal/ModalFooter';
import TextField from '../ui/inputs/text-field';

import styles from './App.module.scss';

enum Status {
  Init = 'init',
  Success = 'success',
}

interface Form extends HTMLFormElement {
  text: HTMLInputElement;
}

const App: React.FC = () => {
  const [items, setItems] = React.useState<Item[]>([]);
  const [status, setStatus] = React.useState<Status>(Status.Init);
  const [isModalVisible, toggleModal] = React.useState<boolean>(false);

  function remove(id: number) {
    api.remove(id).then(() => setItems((items) => items.filter((item) => item.id !== id)));
  }

  function add(event: React.FormEvent<Form>) {
    event.preventDefault();
    const text = event.currentTarget.text.value.trim() as string;

    if (!text) return;

    api.create(text).then((item) => {
      setItems(items.concat(item));
      toggleModal(false);
    });
  }

  React.useEffect(() => {
    api.list().then((items) => {
      setItems(items);
      setStatus(Status.Success);
    });
  }, []);

  if (status === Status.Init) return <span>Loading...</span>;

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Supermarket list</h1>
        <h3>{items.length} item(s)</h3>
      </header>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text} <button onClick={() => remove(item.id)}>delete</button>
          </li>
        ))}
      </ul>
      <Button colorSchema="primary" onClick={() => toggleModal(true)}>
        Add item
      </Button>
      {isModalVisible && (
        <Modal onClose={() => toggleModal(false)}>
          <form onSubmit={add}>
            <h2>Add item</h2>
            <TextField name="text" />
            <ModalFooter>
              <Button type="button">Cancel</Button>
              <Button colorSchema="primary" type="submit">
                Add
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      )}
    </main>
  );
};

export default App;
