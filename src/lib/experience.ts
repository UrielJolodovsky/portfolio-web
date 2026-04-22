export interface IExperienceLink {
    label: string;
    url: string;
}

export interface IExperience {
    role: string;
    company: string;
    companyUrl?: string;
    startDate: string;
    endDate: string;
    description: string;
    technologies: string[];
    accentColor: string;
    links?: IExperienceLink[];
}

export const experiences: IExperience[] = [
    {
        role: "Software Engineer",
        company: "Pency",
        companyUrl: "https://web.pency.app",
        startDate: "Septiembre 2024",
        endDate: "Actualidad",
        description:
            "Desarrollo de una plataforma de gestión de tiendas para que puedan crear su propia tienda online, gestionar productos, pedidos y clientes. Implementación de funcionalidades como pasarelas de pago, gestión de inventario y análisis de ventas.",
        technologies: ["React", "TypeScript", "Next.js", "MongoDB", "Mercado Pago"],
        accentColor: "border-cyan-400",
    },
    {
        role: "Fullstack Developer",
        company: "Deregital",
        companyUrl: "https://deregital.com",
        startDate: "Febrero 2024",
        endDate: "Mayo 2025",
        description:
            "Desarrollo de gestión de usuarios en una empresa, implementando ticketeras para eventos, conectando con Mercado Pago y otros servicios.",
        technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Prisma", "Mercado Pago"],
        accentColor: "border-blue-500",
        links: [
            {
                label: "GitHub - Gestión de Usuarios",
                url: "https://github.com/deregital/expo-manager",
            },
            {
                label: "GitHub - Backend del proyecto",
                url: "https://github.com/deregital/expo-backend",
            },
            {
                label: "GitHub - Ticketeras para eventos",
                url: "https://github.com/deregital/expo-tickets",
            }
        ],
    },
];
