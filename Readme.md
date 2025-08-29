# BFHL Node.js Project
## Project Structure
```
project/
├── index.js           # Main server file
├── package.json       # Node.js dependencies and scripts
├── routes/
│   └── bfhl.js        # Route handling for /bfhl
└── README.md          # Project documentation
```
---

## About

This is a simple Node.js project using **Express**, **Body-Parser**, and **CORS**.
It exposes a single route `/bfhl` where you can send POST requests.

---

## Deployment

The project is deployed on an **AWS EC2 instance**.

* **OS**: Ubuntu
* **Port**: 80 (for public access)
* **Public URL**: [http://ec2-35-175-220-72.compute-1.amazonaws.com:3000/bfhl](http://ec2-35-175-220-72.compute-1.amazonaws.com:3000/bfhl)
* **HTTP Method**: POST

**Security group rules** for EC2:

* HTTP (TCP, 80) open to anywhere (0.0.0.0/0)
* If using port 3000 locally, allow TCP 3000 in security group

---

## Local Setup

1. **Clone the repository**

```bash
git clone `https://github.com/369koushil/Bajaj_Finserv_Health_assignment_22bce20463.git`
cd project
```

2. **Install dependencies**

```bash
npm install
```

This will install all dependencies listed in `package.json`:

* express
* body-parser
* cors
* nodemon
3. **Run the server**


* **For local development on port 3000:**

```bash
node index.js
```

## Test API

Use **Postman** or any HTTP client:

* **Local URL**: `http://localhost:3000/bfhl`
* **Deployed URL**: `http://ec2-35-175-220-72.compute-1.amazonaws.com:3000/bfhl`
* **Method**: POST
* **Headers**: `Content-Type: application/json`
* **Body Example**:

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

* **Response Example**:

```json
{
    "is_success": true,
    "user_id": "chilla_koushil_kumar_reddy_10092004",
    "email": "koushil463@gmail.com",
    "roll_number": "22BCE20463",
    "odd_numbers": ["1"],
    "even_numbers": ["334", "4"],
    "alphabets": ["A", "R"],
    "special_characters": ["$"],
    "sum": "339",
    "concat_string": "aR"
}

```
---

## Notes

* The main server file is `index.js`.
* All route handling is in `routes/bfhl.js`.
