import SidebarAccordion from '../accordion/SidebarAccordion';

const SideBar = () => {
    return (
        <div className='flex flex-col w-[272px] items-center'>
            <div className='py-8'>
                <img src="https://placehold.co/300x300" alt="logo" className='max-w-[208px] aspect-square' />
            </div>
            <div className='bg-primary w-full py-3'>
                <p className='text-2xl text-white text-center'>
                    Company Name
                </p>
            </div>
            <div>
                <SidebarAccordion />
            </div>
        </div>
    );
};

export default SideBar;
