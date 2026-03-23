import MembershipSection1 from '@/components/membership/MembershipSection1';
import MembershipSection2 from '@/components/membership/MembershipSection2';
import MembershipSection3 from '@/components/membership/MembershipSection3';
import MembershipSection4 from '@/components/membership/MembershipSection4';
import MembershipSection5 from '@/components/membership/MembershipSection5';
import '@/components/membership/membership.scss';

const Membership = () => (
    <div>
        <MembershipSection1 />
        <MembershipSection2 />
        <MembershipSection3 />
        <MembershipSection4 />
        <MembershipSection5 />
    </div>
);

export default Membership;
