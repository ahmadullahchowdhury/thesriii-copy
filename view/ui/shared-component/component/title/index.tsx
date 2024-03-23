const Title = ({ title }: { title: string }) => {
    return (
        <p className="relative pb-3 pr-2 w-fit">
            <span className="text-3xl text-neutral ">{title}</span>
            <span className="absolute h-[7px] bg-secondary_1 w-full left-0 bottom-0 rounded-lg"></span>
        </p>
    );
};

export default Title;