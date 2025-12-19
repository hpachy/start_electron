const Database = require('better-sqlite3')
const path = require('path')
const { app } = require('electron')

const dbPath = path.join(app.getPath('userData'), 'app.db')
const db = new Database(dbPath)


db.prepare(`
    CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL
  )
`).run()

db.prepare(`
    CREATE TABLE IF NOT EXISTS auth (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )
`).run()

db.prepare(`
  CREATE TABLE IF NOT EXISTS session (
    id INTEGER PRIMARY KEY,
    userId INTEGER
  )
`).run()

module.exports = db
