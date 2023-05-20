migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sk77yvgqbyt4tsm")

  collection.createRule = null

  return dao.saveCollection(collection)
})
