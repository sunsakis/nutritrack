export default async function handler(req, res) {

    if (req.method === 'GET') {
        res.status(200).json(data)
    } else if (req.method === 'POST') {
try {
      const response = await fetch('https://api.postmarkapp.com/email', {
        method: 'POST',
        body: JSON.stringify({
          "From": "zenona@bobule.lt",
          "To": "zenona@bobule.lt",
          "Subject": "We got a new babushka",
          "TextBody": `
            Name: ${req.body.name} 
            Email: ${req.body.email} 
            Number: ${req.body.number} 
            Address: ${req.body.address}
            Dishes: ${req.body.dishes} 
            Price: ${req.body.price} 
            Extra: ${req.body.extra}`
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Postmark-Server-Token': `${process.env.POSTMARK_SERVER_TOKEN}`,
        },
      });

      const info = await response.json();
      console.log(info);
      

      res.status(200).json(info);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }

    }
}