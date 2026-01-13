import "./LoginForm.css";

export default function LoginModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="container">
      <div className="login-form">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Login</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
}
