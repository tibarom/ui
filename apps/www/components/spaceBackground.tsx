export function SpaceBackground() {
    return (
        <video 
            className="fixed inset-0 z-[-100]  min-h-full min-w-full object-fill max-md:hidden"
            autoPlay={true}
            loop={true} preload="auto">
        <source src="/videos/space.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
    )
}
