
const getData = async () => {
    try {
        const response = await fetch('http://localhost:8000/data', { method: 'GET' })
        const data = await response.json();
        if (response.status === 200) {
            return data;
        }
    } catch (err) {
        console.log(err);
    }
};
