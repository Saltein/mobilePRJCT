import * as SQLite from 'expo-sqlite';

let db: SQLite.SQLiteDatabase;

// Функция для инициализации базы данных
export const initializeDatabase = async () => {
  if (!db) {
    db = await SQLite.openDatabaseAsync('app_database.db');
  }

  // Выполнение начальных миграций
  await db.execAsync(`
        -- Таблица пользователей
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL UNIQUE,
    address TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- Таблица продуктов
    CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    stock INTEGER NOT NULL DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- Таблица заказов
    CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    total_price REAL NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
    );

    -- Таблица позиций в заказах (связь между заказами и продуктами)
    CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    price REAL NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
    );

    -- Таблица категорий продуктов
    CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- Таблица связи продуктов с категориями
    CREATE TABLE IF NOT EXISTS product_categories (
    product_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (category_id) REFERENCES categories(id),
    PRIMARY KEY (product_id, category_id)
    );

    -- Таблица для управления адресами доставки
    CREATE TABLE IF NOT EXISTS delivery_addresses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    address TEXT NOT NULL,
    phone TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
    );

    -- Таблица для управления статусами заказов
    CREATE TABLE IF NOT EXISTS order_statuses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    status_name TEXT NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
};

export const getDatabase = () => db;
