CREATE DATABASE PRIMARY_FOREIGN2
GO

CREATE TABLE BoMon(
    MaBM CHAR(10) PRIMARY KEY,
    Name NVARCHAR(50) DEFAULT N'Ten bo mon'
)
GO
CREATE TABLE Lop(
    MaLop CHAR(10) NOT NULL,
    Name NVARCHAR(50) DEFAULT N'Ten Lop'

    PRIMARY KEY(MaLop)
)
go
-- ddk d tao khoa ngoai
-- + tham chieu toi khoa chinh
-- + not null,  unique
-- + cung so luong truong co sap xep

-- loi ich'
   --- dam bao toan ven du lieu, khong cos truong hop tham chieu toi du lieu khong ton tai
CREATE TABLE GiaoVien(
    MaGV CHAR(10) NOT NULL,
    Name NVARCHAR(50) DEFAULT N'Ten Giao Vien',
    DiaChi NVARCHAR(50) DEFAULT N'Dia Chi Giao Vien',
    NgaySinh DATE,
    Sex BIT,
    MaBM CHAR(10),
    --   c1 : tao khoa ngoai trong bang
    FOREIGN KEY(MaBM) REFERENCES dbo.BoMon(MaBM)
    
)
GO
ALTER TABLE GiaoVien ADD PRIMARY KEY(MaGV)

CREATE TABLE HocSinh (
    MaHS CHAR(10) PRIMARY KEY,
    Name NVARCHAR(50),
     MaLop CHAR(10) 
)
go
-- cach 22 : tao khoa ngoai sau khi tao bang
ALTER TABLE dbo.HocSinh ADD CONSTRAINT KN FOREIGN KEY(MaLop) REFERENCES dbo.Lop(MaLop)
-- CONSTRAINTS DE DAT TEN CHO KHOA NGOAI, SAU NAY MUON XOA KHOA NGOAI CHI CAN XOA TEN



ALTER TABLE dbo.HocSinh DROP CONSTRAINTS KN -- huy khoa ngoai
DROP DATABASE PRIMARY_FOREIGN2
