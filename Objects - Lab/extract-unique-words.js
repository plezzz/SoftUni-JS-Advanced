function solve(arr) {
    return [
        ...new Set(arr
            .join("")
            .toLowerCase()
            .match(/\w+/gim))
    ]
        .join(", ")
}

console.log(solve(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']
));
// lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, pellentesque, quis, hendrerit, dui, quisque, fringilla, est, urna, vitae, efficitur, vestibulum, diam, dignissim, varius, non, fermentum, felis, ultrices, ex, massa, faucibus, nunc, aliquam, ut, morbi, in, pharetra, vel, mattis, arcu, integer, ac, turpis, commodo, nulla, sed, elementum, lectus, vivamus, malesuada, dapibus, congue, egestas, metus

console.log(solve(['Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    'Vestibulum volutpat lacinia blandit.',
    'Pellentesque dignissim odio in hendrerit lacinia.',
    'Vivamus placerat porttitor purus nec hendrerit.',
    'Aliquam erat volutpat. Donec ac augue ligula.',
    'Praesent venenatis sapien vitae libero ornare, nec pulvinar velit finibus.',
    'Proin dui neque, rutrum vel dolor ut, placerat blandit sapien.',
    'Pellentesque at est arcu.',
    'Nullam eget orci laoreet, feugiat nisi vitae, egestas libero.',
    'Pellentesque pulvinar aliquet felis.',
    'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    'Etiam sit amet nisl ex.',
    'Sed lacinia pretium metus quis fermentum.',
    'Praesent a ante suscipit, efficitur risus cursus, scelerisque risus.']
));
// interdum, et, malesuada, fames, ac, ante, ipsum, primis, in, faucibus, vestibulum, volutpat, lacinia, blandit, pellentesque, dignissim, odio, hendrerit, vivamus, placerat, porttitor, purus, nec, aliquam, erat, donec, augue, ligula, praesent, venenatis, sapien, vitae, libero, ornare, pulvinar, velit, finibus, proin, dui, neque, rutrum, vel, dolor, ut, at, est, arcu, nullam, eget, orci, laoreet, feugiat, nisi, egestas, aliquet, felis, etiam, sit, amet, nisl, ex, sed, pretium, metus, quis, fermentum, a, suscipit, efficitur, risus, cursus, scelerisque
