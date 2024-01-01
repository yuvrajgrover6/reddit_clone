import { prisma } from "@/lib/prisma";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Home({ user }: Props) {
  return (
    <main>{user ? <h1>Hello {user.name}</h1> : <h1>No user found</h1>}</main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: "yuvrajgrover6@gmail.com",
      },
    });

    if (!user) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        user: JSON.parse(JSON.stringify(user)),
      },
    };
  } catch (error) {
    console.error("Error fetching user:", error);
    return {
      props: {
        user: null,
      },
    };
  }
};
