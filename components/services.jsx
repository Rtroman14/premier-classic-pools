import { HomeIcon, WrenchScrewdriverIcon, ShieldCheckIcon, WrenchIcon } from '@heroicons/react/24/outline';

const services = [
    {
        icon: HomeIcon,
        title: "Roof Installation",
        description: "Complete roof replacement with premium materials and expert installation guaranteed to last decades."
    },
    {
        icon: WrenchScrewdriverIcon,
        title: "Roof Repair",
        description: "Fast, reliable repairs for leaks, storm damage, and wear. Emergency services available 24/7."
    },
    {
        icon: ShieldCheckIcon,
        title: "Roof Inspection",
        description: "Thorough inspection and detailed report to identify issues before they become costly problems."
    },
    {
        icon: WrenchIcon,
        title: "Maintenance",
        description: "Preventive maintenance programs to extend your roof's lifespan and protect your investment."
    }
];

export const Services = () => {
    return (
        <div className="space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Comprehensive roofing services
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    From installation to maintenance, we provide complete roofing solutions tailored to your needs.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <div 
                            key={index}
                            className="group relative bg-card border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="space-y-4">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
                                    <Icon className="w-7 h-7" />
                                </div>
                                
                                <h3 className="text-xl font-bold">
                                    {service.title}
                                </h3>
                                
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

