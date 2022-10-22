const areWeRunningOnClientSide : () => boolean = () => typeof window !== "undefined"

export {
  areWeRunningOnClientSide
}