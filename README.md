<h3 align="center">API Notes</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

</div>

---

<p align="center">A notes API, where for each registered note, it is possible to add corresponding tags and links.
    <br> 
</p>

## 📝 Index

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

I created this API to practice using routes with a framework and ORM that I am not as familiar with. It was a valuable learning experience, expanding my range of possibilities and making me more adaptable to different tools and technologies.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Requirements

Before you begin, you'll need to have the following tools installed on your machine: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 

### Installing

```bash
# Clone this repository
$ git clone <https://github.com/geraldofrz/API-Notes>

# Access the project folder in the terminal/cmd.
$ cd notes

# Install dependencies
$ npm install

# Run application
$ npm run dev 

# Running on port:3333

# Test it (i tested it whit insomnia)
```



## 🎈 Usage <a name="usage"></a>

### POST /users
Create a user.

### Request Body
```
{
	"name": "Geraldo",
	"email": "geraldo@email.com",
	"password": "123"
}
```

## PUT /user/:id
Update users infos.


## POST /notes/user_id
Create a user note.

### Request Body
```
{
	"title": "Receita de Carbonara com Parmegiana",
	"description": "Receita deliciosa para você fazer na sua casa.",
	"tags": ["parmegiana", "carbonara"],
	"links": ["link1", "link2"]
}
```

## GET /notes/note_id
Get notes whit tags and links.

### Response body
```
{
	"id": 1,
	"title": "Receita de Carbonara com Parmegiana",
	"description": "Receita deliciosa para você fazer na sua casa.",
	"user_id": 2,
	"created_at": "2024-03-04 21:03:40",
	"updated_at": "2024-03-04 21:03:40",
	"tags": [
		{
			"id": 2,
			"name": "carbonara",
			"note_id": 1,
			"user_id": 2
		},
		{
			"id": 1,
			"name": "parmegiana",
			"note_id": 1,
			"user_id": 2
		}
	],
	"links": [
		{
			"id": 1,
			"url": "link1",
			"note_id": 1,
			"created_at": "2024-03-04 21:03:40"
		},
		{
			"id": 2,
			"url": "link2",
			"note_id": 1,
			"created_at": "2024-03-04 21:03:40"
		}
	]
}
```
## GET /notes/note_id 
Search a note whit keywords.

### Query Params
```
user_id       2
title         carbonara
tags          parmegiana
```

### Response body
```
[
	{
		"id": 1,
		"title": "Receita de Carbonara com Parmegiana",
		"user_id": 2,
		"tags": [
			{
				"id": 1,
				"name": "parmegiana",
				"note_id": 1,
				"user_id": 2
			},
			{
				"id": 2,
				"name": "carbonara",
				"note_id": 1,
				"user_id": 2
			}
		]
	}
]
```

## DELETE /notes/note_id
Delete a note.

## GET /tags/user_id
Get a tag registered by user on note.

### Response body
```
[
	{
		"id": 1,
		"name": "parmegiana",
		"note_id": 1,
		"user_id": 2
	},
	{
		"id": 2,
		"name": "carbonara",
		"note_id": 1,
		"user_id": 2
	}
]
```

## ⛏️ Built Using <a name = "built_using"></a>

- [SQLite](https://www.sqlite.org/) - Database
- [Fastify](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@geraldofrz](https://github.com/geraldofrz) 



