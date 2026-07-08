banco.run(`
    CREATE TABLE IF NOT EXISTS pedidos(
    
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    
    cliente TEXT,
    
    telefone TEXT,
    
    produtos TEXT,
    
    total REAL,
    
    data DATETIME DEFAULT CURRENT_TIMESTAMP
    
    )
    `);