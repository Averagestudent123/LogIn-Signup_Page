import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

const Home = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const getInitials = (name) => {
        if (!name) return '?';
        return name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-indigo-100 via-purple-50 to-pink-100">

            {/* Navbar */}
            <nav className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-gray-800">MyApp</span>
                </div>
                <div className="flex items-center gap-3">
                    {user && (
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                {getInitials(user.name)}
                            </div>
                            <span className="text-sm text-gray-700 font-medium hidden sm:block">{user.name}</span>
                        </div>
                    )}
                    <button
                        onClick={handleLogout}
                        className="text-sm bg-red-50 text-red-600 hover:bg-red-100 font-medium px-3 py-1.5 rounded-lg transition"
                    >
                        Logout
                    </button>
                </div>
            </nav>

            {/* Hero */}
            <main className="flex flex-col items-center justify-center text-center px-4 pt-20 pb-12">
                <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
                    Welcome Back 👋
                </span>
                <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4">
                    Hello,{' '}
                    <span className="text-indigo-600">{user?.name || 'User'}!</span>
                </h1>
                <p className="text-gray-500 text-lg max-w-md mb-3">
                    You are successfully logged in. Your session is secured with JWT authentication.
                </p>
                <p className="text-sm text-gray-400 mb-10 bg-white px-4 py-2 rounded-full shadow-sm">
                    📧 {user?.email}
                </p>
                <div className="flex gap-4 flex-wrap justify-center">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                        Get Started
                    </button>
                    <button
                        onClick={handleLogout}
                        className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-200"
                    >
                        Logout
                    </button>
                </div>
            </main>

            {/* Feature Cards */}
            <section className="max-w-4xl mx-auto px-4 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-xl mb-4">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">JWT Secured</h3>
                    <p className="text-gray-500 text-sm">Your session is protected with JSON Web Tokens stored safely in localStorage.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Bcrypt Hashed</h3>
                    <p className="text-gray-500 text-sm">Passwords are hashed with bcrypt — your credentials are never stored in plain text.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-xl mb-4">
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Joi Validated</h3>
                    <p className="text-gray-500 text-sm">Every request is validated server-side with Joi before touching the database.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
