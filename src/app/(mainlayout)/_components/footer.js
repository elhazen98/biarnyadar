export const Footer = () => {
    return (
        <footer className="w-full p-4 flex justify-center text-white/30 text-sm">
            <div className="text-center text-slate-200">
                &copy; {new Date().getFullYear()} biarnyadar | All rights
                reserved.
            </div>
        </footer>
    );
};
