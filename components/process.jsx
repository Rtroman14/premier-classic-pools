const steps = [
    {
        step: "01",
        title: "Design",
        description:
            "On-site consultation, 3D renderings, and a fixed-price proposal before anything is dug.",
    },
    {
        step: "02",
        title: "Permit & Prep",
        description:
            "We pull permits, stake the yard, and schedule excavation around your timeline.",
    },
    {
        step: "03",
        title: "Build",
        description:
            "Gunite, plumbing, decking, and outdoor living features go in, with weekly progress updates.",
    },
    {
        step: "04",
        title: "Start-Up",
        description:
            "Water chemistry, equipment walkthrough, and a maintenance plan so day one goes smoothly.",
    },
];

export const Process = () => {
    return (
        <div className="space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    From sketch to swim.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Every project moves through the same four stages — you'll always know which one
                    you're in.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((item, index) => (
                    <div key={index} className="space-y-4">
                        <div className="text-5xl font-bold text-primary/20">{item.step}</div>
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
