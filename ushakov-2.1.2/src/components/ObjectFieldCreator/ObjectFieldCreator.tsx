import React, { useState } from 'react';
import styles from './ObjectFieldCreator.module.css';

// Главный компонент для создания полей объекта
function ObjectFieldCreator() {
  // Состояние для названия поля
  const [fieldName, setFieldName] = useState('');

  // Состояние для значения поля
  const [fieldValue, setFieldValue] = useState('');

  // Состояние для объекта, куда будем добавлять поля
  const [dataObject, setDataObject] = useState({});

  // Функция для создания нового поля в объекте
  function createField() {
    // Проверяем, что название поля не пустое
    if (fieldName === '') {
      return; // Если пустое - ничего не делаем
    }

    // Создаем новый объект с добавленным полем
    const newObject = {
      ...dataObject, // Копируем все старые поля
      [fieldName]: fieldValue, // Добавляем новое поле
    };

    // Обновляем состояние объекта
    setDataObject(newObject);

    // Очищаем поля ввода
    setFieldName('');
    setFieldValue('');
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Создание полей объекта</h1>

        {/* Поле для названия */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Название поля:</label>
          <input
            type="text"
            value={fieldName}
            onChange={(e) => setFieldName(e.target.value)}
            placeholder="Введите название поля"
            className={styles.input}
          />
        </div>

        {/* Поле для значения */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Значения поля:</label>
          <input
            type="text"
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
            placeholder="Введите значение поля"
            className={styles.input}
          />
        </div>

        {/* Кнопка создания */}
        <button onClick={createField} className={styles.button}>
          Создать поле в объекте
        </button>

        {/* Отображение объекта */}
        <div className={styles.objectDisplay}>
          <p className={styles.objectText}>
            Объект: {JSON.stringify(dataObject)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ObjectFieldCreator;
