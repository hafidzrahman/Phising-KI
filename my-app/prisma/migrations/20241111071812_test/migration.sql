-- CreateTable
CREATE TABLE "Korban" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "no_telp" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "kata_sandi" TEXT NOT NULL,

    CONSTRAINT "Korban_pkey" PRIMARY KEY ("id")
);
