onmessage = function(e) {
    const token = e.data.refreshToken;
    const headers = { 'Authorization': `Bearer ${token}` };
    const sendRefreshToken = async ()=>{
      try {
            const result = await fetch('/api/refresh', { method: 'GET', headers })
            const json = await result.json()
            postMessage(json);
      
        } catch (e) {
            console.error(e)
            postMessage(e);
        }
    }
    setInterval(()=>sendRefreshToken(),55*60000)
    
  }