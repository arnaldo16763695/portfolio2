import { Globe, Router, Network, Server, Monitor, Wifi, Cctv } from 'lucide-react';

// topología ilustrativa: internet → router → switch → dispositivos
const NODE_W = 88;
const NODE_H = 60;

const Node = ({ x, y, icon: Icon, label }) => (
    <g>
        <rect
            x={x - NODE_W / 2}
            y={y - NODE_H / 2}
            width={NODE_W}
            height={NODE_H}
            rx={12}
            className='fill-card stroke-border'
            strokeWidth={1.5}
        />
        <Icon x={x - 12} y={y - 22} width={24} height={24} className='text-primary' strokeWidth={1.5} />
        <text x={x} y={y + 20} textAnchor='middle' className='fill-muted-foreground text-[11px] font-medium'>
            {label}
        </text>
    </g>
);

const NetworkDiagram = ({ labels }) => {
    const bottomRow = [
        { x: 72, icon: Server, label: labels.server },
        { x: 184, icon: Monitor, label: labels.pc },
        { x: 296, icon: Wifi, label: labels.wifi },
        { x: 408, icon: Cctv, label: labels.camera },
    ];

    const links = [
        'M240 74 V110',
        'M240 170 V206',
        ...bottomRow.map(({ x }) => `M240 266 V288 H${x} V310`),
    ];

    return (
        <svg viewBox='0 0 480 380' className='w-full max-w-[480px] h-auto' role='img' aria-label={labels.title}>
            <title>{labels.title}</title>
            {/* enlaces */}
            <g className='stroke-primary/40' strokeWidth={2} fill='none' strokeLinecap='round' strokeLinejoin='round'>
                {links.map((d) => <path key={d} d={d} />)}
            </g>
            {/* paquetes animados (se ocultan si el usuario prefiere menos movimiento) */}
            <g className='fill-primary motion-reduce:hidden'>
                {links.map((d, index) => (
                    <circle key={d} r={4}>
                        <animateMotion dur={`${2 + (index % 3) * 0.6}s`} begin={`${index * 0.4}s`} repeatCount='indefinite' path={d} />
                    </circle>
                ))}
            </g>
            {/* nodos */}
            <Node x={240} y={44} icon={Globe} label='Internet' />
            <Node x={240} y={140} icon={Router} label='Router' />
            <Node x={240} y={236} icon={Network} label='Switch' />
            {bottomRow.map((node) => <Node key={node.x} y={340} {...node} />)}
        </svg>
    );
};

export default NetworkDiagram;
