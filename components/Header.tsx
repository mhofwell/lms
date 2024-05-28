export default function Header() {
    return (
        <div className="flex flex-col gap-16 items-center">
            {/* <div className="flex gap-8 justify-center items-center"></div> */}
            <h1 className="sr-only">
                Last Man Standing - Premiere League Football
            </h1>
            <p className="text-9xl font-bold lg:text-6xl !leading-tight mx-auto max-w-xl text-center">
                Last Man Standing
            </p>
            <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
        </div>
    );
}
