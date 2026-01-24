import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";
import { getBackendConfig } from "@/lib/config";

export default async function Home() {
    const config = await getBackendConfig();

    return (
        <main 
            className="min-h-[110vh] relative flex flex-col items-center justify-center overflow-hidden bg-[#EAF8F9]"
            dir={config.language === 'ar' ? 'rtl' : 'ltr'}
        >
            {/* Dynamic Background Pattern */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(${config.primaryColor} 1px, transparent 1px), linear-gradient(90deg, ${config.primaryColor} 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                ></div>

                {/* Gradient Blobs */}
                <div className="absolute top-0 left-0 w-125 h-125 bg-cyan-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
                <div className="absolute top-0 right-0 w-125 h-125 bg-purple-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-20 w-125 h-125 bg-pink-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="z-10 w-full flex justify-center px-4">
                <LoginForm config={config} />
            </div>

            <Footer text={config.footerText} language={config.language} />
        </main>
    );
}
