<script>
export let arc;
export let radius;
export let active = false;

const rotation = {
    F: 0,
    FS: 300,
    AS: 240,
    A: 180,
    AP: 120,
    FP: 60,
};

let y, x_delta;
$: y = Math.round( radius * ( 1 - Math.sin(60/180*Math.PI) ) );
$: x_delta = Math.round( radius*Math.cos(60/180*Math.PI) );

let path;
$: path = `M ${radius},${radius} L ${radius-x_delta},${y} A ${radius},${radius} 0 0 1 ${radius+x_delta},${y} Z`;

let transform;
$: transform = `rotate(${rotation[arc]},${radius},${radius})`

</script>

    <g { transform }>
        <path d={path} class:active on:click />
    </g>

<style>
path {
    fill: lightgrey;
    stroke: white;
    stroke-width: 2px;
}

path:hover {
    fill: pink;
}

path.active:hover {
    fill: pink;
}

path.active {
    fill: #313131;
}
</style>

