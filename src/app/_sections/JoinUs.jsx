import SectionTitle from "@/components/shared/SectionTitle";

export default function JoinUsSection() {
  return (
    <section className="bg-secondary py-24">
      <div className="base-container">
        <SectionTitle
          titleMarginBottom="mb-10"
          titleColor={"text-base-100"}
          subtitleColor={"text-base-100"}
          title={"Unlock Your Potential as a\nCreator with ByteSpace"}
          subtitle={`Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.`}
        />
        <div className="text-center">
          <button className="btn btn-primary btn-lg">Join as creator</button>
        </div>
      </div>
    </section>
  );
}
