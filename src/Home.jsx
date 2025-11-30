export default function Home() {
    const logout = () => {
      sessionStorage.clear();
      window.location.href = "/";
    };
  
    return (
      <div>
        <h1>Welcome to Social Services</h1>
        <button onClick={() => window.location.href="/services"}>View Services</button>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
  