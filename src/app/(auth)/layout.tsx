import { ReactNode } from "react";

export default function AuthLayout({children}:{children:ReactNode[]}) {
    return(
        <div>
            <h1 className="text-xl font-bold">Logo do app</h1>
            <div>
                {children}
            </div>
        </div>
    )
}