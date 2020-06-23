import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { pathname } = useRouter();

  const nav = (
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between">
        <nav>
            <ul class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline hover:no-underline">
            </ul>
        </nav>
        <div class="flex items-center text-lg no-underline text-white pr-6">
            <a class="" href="https://github.com/frandelgado">
                <i class="fab fa-github icon-white"></i>
            </a>
            <a class="pl-6 " href="#">
                <i class=" fab fa-linkedin icon-white"></i>
            </a>
        </div>
    </div>
    
)

const topicNav = (
    <div>
        <div class="block sm:hidden">
            <a 
                href="#" 
                class="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center" 
            >
            </a>
        </div>
        <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
            <div class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">

            </div>
        </div>
    </div>
)

const header = (            
    <div class="flex flex-col items-center py-12">
        <a class="font-bold text-gray-800 uppercase hover:text-gray-700 no-underline hover:no-underline text-5xl" href="#">
            Fran's Blog
        </a>
        <p class="text-lg text-center text-gray-600">
            Where I document for myself and the world
        </p>
    </div>
);

return (
    <div>
        <nav class="w-full py-4 bg-blue-800 shadow">{nav}</nav>
        <header class="w-full container mx-auto">{header}</header>
        <main>{children}</main>
        <footer class="text-center">
            © {new Date().getFullYear()}, Built with{" "}
            <a href="https://nextjs.org/">Next.js</a> &#128293;
        </footer>
    </div>
);
}
