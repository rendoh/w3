export function* range(start: number, end: number) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

export function lerp(x: number, y: number, p: number) {
  return x + (y - x) * p;
}

export function beta(p: number, delta: number) {
  return 1 - Math.pow(1 - p, 60 * (delta / 1000));
}
