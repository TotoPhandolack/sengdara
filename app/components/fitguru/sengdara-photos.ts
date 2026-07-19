// Real photos of Sengdara Fitness Km6, pulled from its Google Business Profile
// (https://maps.app.goo.gl/TPBH4abruK9srHEK6). Verified authentic — each was
// checked visually before being included here. Google-hosted images can be
// re-served at any size via the `w`/`h` query suffix.

export const sengdaraPhotos = {
  // Exterior, blue hour — building signage "SENGDARA FITNESS"
  exteriorNight:
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn2J8_-VM19zHbyYSBaWzPhSkCu9Ve_luWnN_qrQZ-l74dnUIeLpwp46iyOOaNdZbhfXJ2xonsfu4k9OnnPrvJitgqhxbErvnThq8orBNnuvnAsTvRjOxE6roP7JsidtMuatAKPCQ",
  // Two-level equipment floor, red/white diamond-pattern columns (matches building facade)
  interiorTwoLevel:
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmnHnjhS_UZy6SBu_ob7w6fILDD8OTEgC7kcdsvEW_rpTRrzUd4JT5K1QIvLGZ6LVV5D5vrf7JTlWDKTFwxrANy-FsVR7RBvzUeJ1mRVVtsj1sr-qNLBfqx3nqpcsjnMknsKxz-",
  // Member on a cable machine
  memberCableMachine:
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkAA2LeTRn-HKrjUVMojLs7izv0frTpy4M4NQv8mxWpRVjFBAN0S8CLvn51U2lJ3XJzO7qcu6KlB5f-9fvOn3FltA_F4kjDdU6cSHbqV7BO81Y9luL6pJlahPbmugg744JNCnn-nw",
  // Boxing / functional training area, punching bags, yellow floor markings
  boxingArea:
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlTWDA62Dajr4OcSO-SheHSDS5yxhBO6jxQAuKIcYV_x_kDL1s2yyzBheXMif7tVt0ygfPz5vnmPlxwBAnn5O27DWDdHNUj-U5zteZYgiaoH_bMOBYtsXkK0_hxZCEdt4OwlkwF",
  // Elevated running track overlooking the equipment floor
  elevatedTrack:
    "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlZRMU6GPz6AB1mOEMLzDnhJ7u0uMENUXy5srcnolxvuNlVRDKxxw0rWDuMe5t_kS7tdFjunQz5sNIJyBRikZEAecxqrMsp-qTA1i77GTtpSTuYPH5tihAUZzG3rsuFMJ5iD90",
  // Cardio / treadmill floor
  cardioFloor:
    "https://lh3.googleusercontent.com/grass-cs/ACvplmMGIqPKCf9_IkIAIliKoMToHBLpEVeguro18YxrvosgraeB9HWfL7I3MVa8i_HS7bbmo5SUpBacPY8KRA5cCKNrdsFMltZ93Hq3AGMXGJQVhnJpP3okHoeYGsgweTxWmkKmCpcDP8vqsmJQ",
} as const;

/** Append Google's size suffix to request a specific rendered size. */
export function sengdaraPhoto(
  key: keyof typeof sengdaraPhotos,
  width: number,
  height: number
) {
  return `${sengdaraPhotos[key]}=w${width}-h${height}-k-no`;
}
