migrate((db) => {
  const collection = new Collection({
    "id": "6ouyvht9duh17ko",
    "created": "2023-02-03 07:40:00.688Z",
    "updated": "2023-02-03 07:40:00.688Z",
    "name": "rewards",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zvuvjeia",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 70,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tbu5g3vp",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 500,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ktcrto5i",
        "name": "how_to_get",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 240,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "yxidjhjd",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "dm9wnwi0",
        "name": "cost",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "hyueludi",
        "name": "count",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "yt2n5hva",
        "name": "bought",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6ouyvht9duh17ko");

  return dao.deleteCollection(collection);
})
