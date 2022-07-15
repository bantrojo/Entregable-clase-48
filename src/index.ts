import{serve} from="https://deno.land/std/http/mod.ts";
const s=serve({port:8080});
for await (const req of s){
    erq.respond({doby:"Listening on Deno server"})
}


import{
    red,green,bgYellow,bgBlack,bgWhite,bold
} from "https://deno.land/std@0.100.0/fmt/colors.ts"

console.log(bgYellow(bold(red('Texto ejemplo'))));
console.log(bgWhite(bold(green('Texto ejemplo'))));

const port=Number(Deno.env.get("PORT"))||8080;
console.log(port);
