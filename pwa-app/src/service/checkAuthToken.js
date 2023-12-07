export default async function() {
    const token = localStorage.getItem('token')
    const headers = { 'Authorization': `Bearer ${token}` };
    try {
        const result = await fetch('/api/auth', { method: 'GET', headers })
        return result.json()

    } catch (e) {
        console.error(e)
        return false;
    }
}