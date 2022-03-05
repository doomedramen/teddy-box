import Link from 'next/link';

export default function SidebarItem({ text, active, icon, link }) {
    return (
        <li >
            <Link href={link}>
                <a className={`${active ? 'active' : ''}`}>
                    {icon}
                    {text}
                </a>
            </Link>
        </li>
    )

}