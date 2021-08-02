import './styles/ClientForm.css';

const ClientForm = () => {
  return (
    <form className="clientForm">
      <input className="firstName" placeholder="First Name" required />

      <input className="lastName" placeholder="Last Name" required />

      <input
        className="emailAddress"
        placeholder="Email Address"
        type="email"
        required
      />
      <input className="password" placeholder="Password" required />
      <button>Claim your free trial </button>
      <span>
        By clicking the button, you are agreeing to our{' '}
        <a className="termsOfService" href="#">
          Terms and Services
        </a>
      </span>
    </form>
  );
};

export default ClientForm;
