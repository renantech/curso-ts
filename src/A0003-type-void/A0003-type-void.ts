function semRetorno(...args: Array<string>): void {
    console.log(args.join('  '));
    
}

const pessoa = {};

semRetorno('Renan', 'Mendes');